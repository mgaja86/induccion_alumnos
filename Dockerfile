# Dockerfile para una aplicación Next.js con salida 'standalone'

# Etapa 1: Instalación de dependencias
FROM node:20-alpine AS deps
WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar archivos de definición de dependencias
COPY package.json pnpm-lock.yaml* ./

# Instalar dependencias de desarrollo para la compilación
RUN pnpm install --frozen-lockfile --prod=false


# Etapa 2: Compilación de la aplicación
FROM node:20-alpine AS builder
WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar dependencias de la etapa anterior
COPY --from=deps /app/node_modules ./node_modules
# Copiar el resto del código fuente
COPY . .

# Compilar la aplicación Next.js.
# Esto generará la salida 'standalone' en .next/standalone gracias a tu next.config.ts
RUN pnpm build


# Etapa 3: Imagen de producción final
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Deshabilitar la telemetría de Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# Crear un usuario no-root por seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar la salida 'standalone' de la etapa de compilación
COPY --from=builder /app/.next/standalone ./
# Copiar los activos públicos y estáticos
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Asignar la propiedad de los archivos al usuario no-root
RUN chown -R nextjs:nodejs .

# Cambiar al usuario no-root
USER nextjs

EXPOSE 3000

ENV PORT 3000

# Comando para iniciar el servidor 'standalone'
CMD ["node", "server.js"]
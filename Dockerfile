# Use official Node.js image as the base
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build Next.js app (outputs to .next)
ARG NEXT_PUBLIC_CONTACT_API
ENV NEXT_PUBLIC_CONTACT_API=$NEXT_PUBLIC_CONTACT_API
RUN npm run build

# -- Production image --
FROM node:20-alpine AS runner

WORKDIR /app

# Only copy necessary files for production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose port
EXPOSE 5000

# Set Next.js to listen on port 5000
ENV PORT=5000

# Start Next.js app
CMD ["npm", "start"]
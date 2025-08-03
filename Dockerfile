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
RUN npm run build

# -- Production image --
FROM node:20-alpine AS runner

WORKDIR /app

# Only copy necessary files for production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

# Expose port
EXPOSE 5000

# Start Next.js app
CMD ["npm", "start"]
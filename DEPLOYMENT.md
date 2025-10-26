# 🚀 Deployment Guide - Git Conventional Commits Practice

## 📋 **Deployment Overview**

This guide covers deploying the Git Conventional Commits Practice application to various platforms including Vercel, Netlify, and self-hosted solutions.

## 🌐 **Platform Options**

### 1. **Vercel (Recommended)**

#### **Quick Deploy**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/alongside-amolrathod/Git_Conventional_Commits_Practice)

#### **Manual Deployment**
1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy from project directory
   cd git-nextjs
   vercel
   ```

2. **Environment Variables**
   Set the following environment variables in Vercel dashboard:
   ```
   NEXTAUTH_URL=https://your-app.vercel.app
   NEXTAUTH_SECRET=your-secret
   MONGODB_URI=your-mongodb-uri
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   RESEND_API_KEY=your-resend-api-key
   EMAIL_FROM=noreply@yourdomain.com
   ```

3. **Build Configuration**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 2. **Netlify**

#### **Deployment Steps**
1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   Add all required environment variables in Netlify dashboard

### 3. **Self-Hosted (Docker)**

#### **Dockerfile**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### **Docker Compose**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/git-commits-practice
    depends_on:
      - mongo
  
  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## 🔧 **Environment Setup**

### **Required Environment Variables**

#### **Core Application**
```bash
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-nextauth-secret
NODE_ENV=production
```

#### **Database**
```bash
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/git-commits-practice
```

#### **OAuth Providers**
```bash
# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

#### **Email Service**
```bash
RESEND_API_KEY=your-resend-api-key
EMAIL_FROM=noreply@yourdomain.com
```

#### **Security**
```bash
JWT_SECRET=your-jwt-secret
ENCRYPTION_KEY=your-encryption-key
```

### **Optional Environment Variables**
```bash
GOOGLE_ANALYTICS_ID=your-ga-id
SENTRY_DSN=your-sentry-dsn
```

## 🗄️ **Database Setup**

### **MongoDB Atlas (Recommended)**

1. **Create Account**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a free account

2. **Create Cluster**
   - Choose your region
   - Select M0 (Free) tier
   - Configure network access

3. **Database User**
   - Create a database user
   - Set strong password
   - Note the connection string

4. **Network Access**
   - Add your IP address
   - Or use 0.0.0.0/0 for all IPs (less secure)

### **Local MongoDB**

```bash
# Install MongoDB
# macOS
brew install mongodb-community

# Ubuntu/Debian
sudo apt-get install mongodb

# Start MongoDB
mongod --dbpath /path/to/your/db
```

## 🔐 **OAuth Setup**

### **Google OAuth**

1. **Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing

2. **Enable APIs**
   - Enable Google+ API
   - Enable Google OAuth2 API

3. **Create Credentials**
   - Go to Credentials
   - Create OAuth 2.0 Client ID
   - Set authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (development)
     - `https://your-domain.com/api/auth/callback/google` (production)

### **GitHub OAuth**

1. **GitHub Settings**
   - Go to GitHub Settings > Developer settings
   - Click "New OAuth App"

2. **OAuth App Configuration**
   - Application name: Your app name
   - Homepage URL: `https://your-domain.com`
   - Authorization callback URL: `https://your-domain.com/api/auth/callback/github`

## 📧 **Email Service Setup**

### **Resend (Recommended)**

1. **Create Account**
   - Go to [Resend](https://resend.com)
   - Sign up for free account

2. **Get API Key**
   - Go to API Keys section
   - Create new API key
   - Copy the key

3. **Domain Setup**
   - Add your domain
   - Verify domain ownership
   - Configure DNS records

### **Alternative Email Services**

#### **SendGrid**
```bash
SENDGRID_API_KEY=your-sendgrid-api-key
```

#### **Mailgun**
```bash
MAILGUN_API_KEY=your-mailgun-api-key
MAILGUN_DOMAIN=your-mailgun-domain
```

## 🚀 **Deployment Steps**

### **1. Pre-Deployment Checklist**

- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] OAuth providers configured
- [ ] Email service configured
- [ ] Domain/URL configured
- [ ] Security secrets generated

### **2. Generate Security Secrets**

```bash
# Navigate to project directory
cd git-nextjs

# Generate secure secrets
npm run security:generate

# Validate security configuration
npm run security:validate
```

### **3. Build and Test**

```bash
# Install dependencies
npm install

# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build

# Test production build locally
npm start
```

### **4. Deploy**

#### **Vercel Deployment**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### **Manual Deployment**
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔒 **Security Checklist**

### **Production Security**

- [ ] Use HTTPS for all URLs
- [ ] Generate secure secrets with `npm run security:generate`
- [ ] Never commit `.env.local` to version control
- [ ] Use different secrets for development and production
- [ ] Enable MongoDB authentication
- [ ] Configure OAuth apps with production URLs
- [ ] Set up proper CORS policies
- [ ] Enable security headers
- [ ] Monitor for security issues
- [ ] Regular secret rotation (every 90 days)

### **Environment Variables Security**

```bash
# Generate secure secrets
npm run security:generate

# Validate security configuration
npm run security:validate

# Generate environment template
npm run security:template
```

## 📊 **Monitoring & Analytics**

### **Performance Monitoring**

1. **Vercel Analytics**
   - Built-in performance monitoring
   - Core Web Vitals tracking
   - Real-time analytics

2. **Google Analytics**
   ```bash
   GOOGLE_ANALYTICS_ID=your-ga-id
   ```

3. **Error Tracking**
   ```bash
   SENTRY_DSN=your-sentry-dsn
   ```

### **Health Checks**

- **API Health**: `/api/health`
- **Database Health**: `/api/test-database`
- **Email Health**: `/api/test-email`
- **Security Health**: `/api/security/validate`

## 🔄 **CI/CD Pipeline**

### **GitHub Actions**

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🐛 **Troubleshooting**

### **Common Issues**

#### **Build Failures**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### **Database Connection Issues**
- Check MongoDB URI format
- Verify network access
- Check authentication credentials

#### **OAuth Issues**
- Verify redirect URIs
- Check client ID and secret
- Ensure HTTPS in production

#### **Email Issues**
- Verify API key
- Check domain configuration
- Test with `/api/test-email`

### **Debug Mode**

```bash
# Enable debug logging
DEBUG=* npm run dev

# Check environment variables
npm run security:validate
```

## 📞 **Support**

### **Documentation**
- **README.md**: Complete project documentation
- **SECURITY.md**: Security guidelines
- **ENV_SETUP.md**: Environment setup guide
- **EMAIL_SETUP.md**: Email configuration

### **Community Support**
- **GitHub Issues**: Bug reports and feature requests
- **Discord**: Community support
- **Stack Overflow**: Technical questions

### **Professional Support**
- **Email**: support@conventional-commits-practice.com
- **GitHub Discussions**: Community discussions
- **Documentation**: Comprehensive guides

---

## 🎉 **Ready to Deploy!**

Your Git Conventional Commits Practice application is now ready for deployment. Follow the steps above to deploy to your preferred platform and start helping developers master conventional commits!

**Happy Deploying!** 🚀

# Utiliser une image PHP avec FPM
FROM php:8.1-fpm

# Installer les extensions PHP nécessaires et Node.js
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    # Ajouter le dépôt Node.js et installer Node.js
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copier les fichiers de l'application
COPY . /var/www

# Définir le répertoire de travail
WORKDIR /var/www

# Donner les permissions nécessaires
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Installer les dépendances PHP et JavaScript
RUN composer install --optimize-autoloader --no-dev \
    && npm install \
    && npm run build

# Exposer le port 8000 pour Render
EXPOSE 8000

# Démarrer PHP-FPM
CMD ["php-fpm"]

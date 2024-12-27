# Utiliser une image PHP avec FPM
FROM php:8.1-fpm

# Installer les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copier les fichiers de l'application
COPY . /var/www

# Définir le répertoire de travail
WORKDIR /var/www

# Donner les permissions nécessaires
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage

# Installer les dépendances PHP et JavaScript
RUN composer install --optimize-autoloader --no-dev \
    && npm install \
    && npm run build

# Exposer le port 8000 pour Render
EXPOSE 8000

# Démarrer PHP-FPM
CMD ["php-fpm"]

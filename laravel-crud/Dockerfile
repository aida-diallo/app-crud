# Utiliser une image officielle PHP avec Composer
FROM php:8.1-fpm

# Installer les dépendances nécessaires pour Laravel
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd pdo pdo_mysql

# Installer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Définir le répertoire de travail
WORKDIR /var/www

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer les dépendances PHP
RUN composer install --no-dev --optimize-autoloader

# Exposer le port 9000 pour PHP
EXPOSE 9000

# Lancer PHP-FPM
CMD ["php-fpm"]

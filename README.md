# README: Serving React Files in an Unencrypted Manner and Configuring SSL

## Serving React Files Without Encryption

To serve React files in an unencrypted manner, follow these steps:

### 1. Pull Code to Your Repository

First, pull the code to your repository.

### 2. Build the React Application

Navigate to the frontend/simple directory and run the following commands:

```bash
cd frontend/simple
npm install
npm run build
```

This will create a production build directory in the same folder.

### 3. Copy Build Directory

Make sure to copy the build folder to /var/www/.

### 4. Modify Nginx Configuration

Once copied, make changes to the Nginx configuration file located at /etc/nginx/sites-enabled/default as mentioned in the configuration file in the nginx folder.

### 5. Restart Nginx Service

Restart the Nginx service with the following command:

```bash
sudo service nginx restart
```

Now, if you access these files with YOUR_IP:YOUR_PORT, you should be able to view the files.

## Configuring SSL

To configure SSL for your server, follow these steps:

### 1. Download Certbot

Download Certbot by following the steps outlined at [Certbot](https://certbot.eff.org/).

### 2. Obtain a Domain Name

After downloading Certbot, obtain a domain name and set an A record for it, pointing the DNS name to the IP address.

### 3. Modify Nginx Configuration

Make changes to the Nginx configuration and replace the DNS name with your domain name under 'servername'.

### 4. Run Certbot

Run the following command to install the SSL certificate using Certbot:

```bash
sudo certbot --nginx -v
```

### 5. Congratulations!

Your SSL certificate has been successfully installed.

Follow these steps carefully to ensure your React files are served without encryption and SSL is configured for secure connections.

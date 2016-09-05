# ec2-node-nginx

Node.js v4 and npm2, using PM2 as process manager and nginx as reverse proxy to reduce server load.

## Install

```bash
$ sudo yum -y install git
$ git clone https://github.com/sbtoledo/ec2-node-nginx.git
```

## Use

Set the Node.js application to listen to the port 3000. To deploy code, just git commit to ssh://ec2-user@{hostname}:~/git/{applicationName}.

```bash
$ cd ec2-node-nginx

$ bin/setup {device}
$ bin/update
$ bin/load {applicationName} {sslCertificate}
```

## Know

### bin/setup {device}

Mount the application EBS volume to the current instance and configure Node.js and nginx. Usually `{device}` will be `/dev/sdb`, and it must be formatted if it is a new volume:

```bash
$ sudo mkfs.ext4 /dev/sdb
```

### bin/update

Update ports and global npm packages and clean unused packages.

### bin/load {applicationName} {sslCertificate}

Loads a new application into the EBS volume, with a basic deployment system. A custom SSL certificate name can be set or `default` can be used for the system certificate. Custom SSL certificates must be copied to `/mnt/node/ssl/{sslCertificate}.key` and `/mnt/node/ssl/{sslCertificate}.crt` files.

### bin/ssl

Update the system SSL certificate.

## Requirements

- t2.micro instance
- A ext4 formatted EBS volume
- Amazon Linux AMI

## TODO

- Custom proxy ports

## License

The MIT License (MIT), © 2016 Saulo Toledo

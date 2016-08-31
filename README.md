# ec2-node-nginx

Node.js v4 and npm2, using PM2 as process manager and nginx as reverse proxy to reduce server load.

## Install

```bash
$ su root -c 'pkg install git'

$ git clone https://github.com/sbtoledo/ec2-node-nginx.git
```

## Use

Set the Node.js application to listen to the port 3000. To deploy code, just git commit to ssh://ec2-user@{hostname}/~/git/{applicationName}.

```bash
$ cd ec2-node-nginx

$ bin/setup {device}
$ bin/update
$ bin/load {applicationName}
```

## Know

### bin/setup {device}

Mount the application EBS volume to the current instance and configure Node.js and nginx. Usually `{device}` will be `/dev/xbd1`, and it must be formatted if it is a new volume:

```bash
$ su root -c 'newfs /dev/xbd1'
```

### bin/update

Update ports and global npm packages and clean unused packages.

### bin/load {applicationName}

Loads a new application into the EBS volume, with a basic deployment system.

## Requirements

- t2.micro instance
- A formatted EBS volume
- FreeBSD 10.3+ AMI

## License

The MIT License (MIT), © 2016 Saulo Toledo

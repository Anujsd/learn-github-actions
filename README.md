# Learn Github Action

Github Action does following tasks

1. When Commit message contains [terraform]

- Ec2 instance with t2.micro type will be created
- Docker will be installed on it

2. When Commit message contains [build]

- Github Actions will Build Docker container
- Push it to docker hub
- Github Action will then Run container on EC2 instance

### EC2 Instance Configuration Script

You can add below script in user data for configuring your ec2 instance.

Script installs Docker.

```
#!/bin/bash

# Add Docker's official GPG key:
apt-get update
apt-get install -y ca-certificates curl gnupg
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update

apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

groupadd docker

usermod -aG docker ubuntu

reboot
```

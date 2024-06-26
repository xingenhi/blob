---
title: 常用
date: 2023/6/28
---

# 常用操作

# 一、关闭防火墙

- 临时关闭

  ```
  systemctl stop firewalld
  ```

- 永久关闭

  ```
  systemctl disable firewalld
  ```

- 查看防火墙状态

  ```
  systemctl status firewalld
  ```

# 二、关闭selinux

- 关闭

```
swapoff -a && sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

setenforce 0 && sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
```

- 查看状态

输入`/usr/sbin/sestatus`，显示SELinux status: disabled表示已经关闭

# 三、关闭swap

- 关闭

  ```
  sed -ri 's/.*swap.*/#&/' /etc/fstab
  ```

- 查看swap状态

​	输入`free`，显示swap的行全部为0表示关闭

# 四、更改主机名

- 修改

  ```
  hostnamectl set-hostname <主机名>
  ```

- 查看当前主机名

  ```
  hostname
  ```

# 五、时间同步

```
yum install ntpdate -y

ntpdate time.windows.com
```


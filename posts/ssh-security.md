# Как безопасно настроить SSH: практическое руководство

SSH — основной инструмент администратора. Но неправильная настройка делает сервер уязвимым. Разберём пошагово, как защитить SSH и закрыть лишние двери.

## 1. Отключаем вход по паролю
Редактируем `/etc/ssh/sshd_config`:
```
PasswordAuthentication no
ChallengeResponseAuthentication no
```
Перезапускаем SSH:
```
sudo systemctl restart sshd
```

## 2. Используем ключи
Генерируем ключ:
```
ssh-keygen -t ed25519 -C "admin@yourdomain"
```
Копируем на сервер:
```
ssh-copy-id user@server
```

## 3. Включаем 2FA
```
sudo apt install libpam-google-authenticator
google-authenticator
```
Добавляем в `/etc/pam.d/sshd`:
```
auth required pam_google_authenticator.so
```

## 4. Ограничиваем IP
В `/etc/hosts.allow`:
```
sshd: 192.168.1.0/24
```

---

**Вывод:** Настроив SSH правильно один раз — можно спать спокойно.
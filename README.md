
Install npm dependensies:
```bash
npm install
```

Create and activate virtual environment:
```bash
python3 -m venv venv
venv\Scripts\activate (Windows)
source venv/bin/activate (Linux)
```

Install dependensies for backend:
```bash
pip install -r requirements.txt
```

Run server:
```bash
flask --app main --debug run
```

To manage CSS using Tailwind run:
```bash
npx tailwindcss -i static/css/main.css -o static/css/tailwind.css --watch
```

Add .env file and put your enviranment variables:
```bash
'SECRET_KEY' = 'SECRET_KEY'
```

SMTP config: 
```bash
'MAIL_SERVER'= 'MAIL_SERVER'
'MAIL_PORT' = 'MAIL_PORT'
'MAIL_USERNAME' = 'MAIL_USERNAME'
'MAIL_PASSWORD' = 'MAIL_PASSWORD'
'MAIL_USE_TLS' = 'MAIL_USE_TLS'
'MAIL_USE_SSL' = 'MAIL_USE_SSL'
```
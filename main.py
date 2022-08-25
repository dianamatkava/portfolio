from flask import Flask, render_template
from flask_mail import Mail, Message
import os
from distutils.util import strtobool
from dotenv import load_dotenv
load_dotenv()


app = Flask(__name__)

app.config['MAIL_SERVER']= os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = strtobool(os.getenv('MAIL_USE_TLS'))
app.config['MAIL_USE_SSL'] = strtobool(os.getenv('MAIL_USE_SSL'))


mail = Mail(app)

@app.route('/')
def home():
    # print(app.config['MAIL_USE_SSL'], app.config['MAIL_USE_TLS'], 'iiiiiiiiiiiiiiiii')
    # msg = Message("TEST subject", sender='dianamatkava@gmail.com', recipients=['dianamatkava7@gmail.com'])
    # msg.body = 'TEST body'
    # mail.send(msg)
    return render_template('main.html', **{'title': 'Home'})



@app.route('/contact')
def contact():
    return render_template('contact.html', **{'title': 'Contact'})



@app.route('/about')
def about():
    return render_template('about.html', **{'title': 'About'})




from flask import Flask, render_template, request, url_for, redirect
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
    return render_template('main.html', **{'title': 'Home', 'url_name': 'home'})



@app.route('/contact', methods=['GET', 'POST'])
def contact():
    return render_template('contact.html', **{'title': 'Contact', 'url_name': 'contact'})


@app.route('/<current_url>/send-mail', methods=['POST'])
def send_mail(current_url):
    print(request.url)
    sender_name = request.form['name']
    sender_email = request.form['email']
    message = request.form['message']
    
    msg = Message(
        f"MSG from {sender_name} (using personal web-site)", 
        sender=sender_email, recipients=['diana.matkava.pr@gmail.com'])
    msg.body = message
    mail.send(msg)
    return redirect(url_for(current_url)+'#contact')


@app.route('/about')
def about():
    return render_template('about.html', **{'title': 'About'})




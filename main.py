from flask import Flask, render_template, request
from flask_mail import Mail, Message
from flask_wtf.csrf import CSRFProtect
from contact_form import ContactForm
import os
import json
from distutils.util import strtobool
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)
csrf = CSRFProtect(app)

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# SMTP config
app.config['MAIL_SERVER']= os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = strtobool(os.getenv('MAIL_USE_TLS'))
app.config['MAIL_USE_SSL'] = strtobool(os.getenv('MAIL_USE_SSL'))


mail = Mail(app)


@app.route('/', methods=['GET', 'POST'])
def home():
    form = ContactForm()
    return render_template('main.html', **{'title': 'Home', 'form': form})



@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    return render_template('contact.html', **{'title': 'Contact', 'form': form})




@app.route('/send_mail', methods=['POST'])
@csrf.exempt
def send_mail():
    form = ContactForm(**request.json)
    if form.validate():
        msg = Message(
            f"MSG from {request.json['name']} (using personal web-site)", 
            sender=request.json['email'], recipients=['diana.matkava.pr@gmail.com'])
        msg.body = request.json['message']
        # mail.send(msg)
        message = {'subbmit': 'Message was sent'}
        form = ContactForm()
        
    else: 
        message = form.errors
    return json.dumps(message, indent=4)
    

@app.route('/about')
def about():
    return render_template('about.html', **{'title': 'About'})




from flask import Flask, url_for, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main.html', **{'title': 'Home'})



@app.route('/contact')
def contact():
    return render_template('contact.html', **{'title': 'Contact'})



@app.route('/about')
def about():
    return render_template('about.html', **{'title': 'About'})
from flask import Flask, url_for, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main.html')



@app.route('/contact')
def contact():
    return render_template('contact.html')



@app.route('/about')
def about():
    return render_template('about.html')

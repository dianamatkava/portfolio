from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, TextAreaField
from wtforms.validators import ValidationError, DataRequired, Length, Email

class ContactForm(FlaskForm):
    name = StringField(label=('Enater your name'),
        validators=[DataRequired(), 
        Length(min=2, max=68, message='Name length is too small/long') ])
    
    email = EmailField(label=('Enter your email'), validators=[DataRequired(), Email("This field requires a valid email address")])
    message = TextAreaField(label=('Enter your message'), validators=[DataRequired(), 
        Length(min=2, max=10000, message='Message area is between 2 to 10 000 letters') ])
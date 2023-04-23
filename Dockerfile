FROM python:3.8-slim-buster

WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs  && apt-get install -y build-essential

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY package.json package-lock.json /app/
RUN npm install

# Copy Django project files
COPY . /app/

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV SECRET_KEY 'django-insecure-*#ds*1+$+q+i*@@0#^-um=yi*-yztmy8yc8fbv@z0%9!*'
ENV DATABASE_URL sqlite:///db.sqlite3

# Start Django development server
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
#CMD ["python", "manage.py", "runserver", "0.0.0.0:80"]
CMD ["uwsgi", "--socket", ":1603", "--workers", "4", "--master", "--enable-threads", "--module", "app.wsgi"]
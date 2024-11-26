# Use the official Python images
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directorys
WORKDIR /My_Project

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the application codes
COPY . .

EXPOSE 5000

# Run migrations and start the app
CMD ["guinicorn","-b","0.0.0.0:5000","My_Project:create_app()"]
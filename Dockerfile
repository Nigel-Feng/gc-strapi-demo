# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install --no-cache-dir \
    lightwood \
    mindsdb \
    python-binance

# Create directory for Prometheus metrics
RUN mkdir -p /tmp/prometheus

# Copy your application code into the container
COPY . .

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PROMETHEUS_MULTIPROC_DIR=/tmp/prometheus
ENV BINANCE_API_KEY=your_api_key_here
ENV BINANCE_API_SECRET=your_api_secret_here

# Command to run your application
CMD ["python", "your_script.py"] 
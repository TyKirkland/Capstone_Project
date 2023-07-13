# Install Dependencies
pip3 install -r deps.txt

# Collects static files, --no-input automates process and prevents it from prompting user for any info
python3 manage.py collectstatic --no-input

# Runs the migrations for database tables (and maybe more)
python3 manage.py migrate
psql -f install.sql -U postgres
PGPASSWORD=marcus psql -d app -f structure.sql -U marcus
PGPASSWORD=marcus psql -d app -f data.sql -U marcus

while :
do
    git add .
    git commit -m "incremental changes"
    git push
    echo "sleeping 30"
    sleep 30
done

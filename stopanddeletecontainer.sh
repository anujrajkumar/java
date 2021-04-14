name=$1
matchingStarted=$(docker ps --filter="name=$name" -q | xargs)
echo $matchingStarted
[[ -n $matchingStarted ]] && docker stop $name
matching=$(docker ps -a --filter="name=$name" -q | xargs)
echo $matching
[[ -n $matching ]] && docker rm $matching
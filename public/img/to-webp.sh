for img in *.{jpg,jpeg,png}; do
  # Check if file exists (in case no matches)
  [ -f "$img" ] && cwebp -q 75 -z 9 -m 6 "$img" -o "${img%.*}.webp" && echo "Converted $img"
done

UPDATE inventory
SET name = $2,
    price = $3,
    imgurl = $4
where product_id= $1
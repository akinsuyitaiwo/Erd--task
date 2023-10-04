db.createCollection("Products")

db.Products.insertOne({
    product_id: 1,
    product_size: Large,
    product_color:blue,
    product_price:4000,
    categories:shirt, 
    });
    db.Products.insertOne({   
    product_id: 2,
    product_size: medium,
    product_color:black,
    product_price:4600,
    categories: shorts,
  });

  db.Products.find( {categories: "shirts"} );
  db.Products.findOne( {product_color: "blue"} );

  db.posts.findOneAndUpdate( { product_id: 1 }, { $set: { product_size: medium } } );
 
  db.posts.deleteOne({ product_id : 1})
import ProductCart from './ProductCart';

const PriceHighLowAll = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    const products = await res.json();

   const priceHigh = products.filter((product) => product.change?.dir === "up").slice(0, 6);   
   const priceLow = products.filter((product) => product.change?.dir === 'down').slice(0, 6);

    return (
        <div className="mx-auto mt-8 space-y-8 px-4 pb-12">
            <ProductCart data={priceHigh} title="আজ দাম বেড়েছে" direction="up" icon="▲" />
            <ProductCart data={priceLow} title="আজ দাম কমেছে" direction="down" icon="▼"/>
            <ProductCart data={products} id="all" title="সব পণ্য" direction="all" />
        </div>
    );
};

export default PriceHighLowAll;

import React from "react";

const allProducts = [
  {
    logo: "/logos/products/Accounting.svg",
    name: "Accounting API",
    description: "Connect to your customers' accounts through our universal API.",
    link: "/accounting-api/overview",
    linkText: "See our accounting data and integration coverage →",
  },
  {
    logo: "/logos/products/Banking.svg",
    name: "Banking API",
    description: "Use Open Banking data for bank accounts and transactions alongside our other best-in-class products.",
    link: "/banking-api/overview",
    linkText: "See our banking data and integration coverage →",
  },
  {
    logo: "/logos/products/Commerce.svg",
    name: "Commerce API",
    description: "Connect to payment, Point of Sale, and eCommerce platforms and build with your customers' sales, orders, and payments data.",
    link: "/commerce-api/overview",
    linkText: "See our commerce data and integration coverage →",
  },
  {
    logo: "/logos/products/BankFeeds.svg",
    name: "Bank Feeds API",
    description: "Enable your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.",
    link: "/bank-feeds-api/overview",
    linkText: "Build your first bank feed →",
  },
  {
    logo: "/logos/products/Assess.svg",
    name: "Assess",
    description: "Make smarter credit decisions for your small business customers. Enrich your customer's financial data and receive actionable insights.",
    link: "/assess/get-started",
    linkText: "Start assessing your customers →",
  },
  {
    logo: "/logos/products/SyncforExpenses.svg",
    name: "Sync for Expenses",
    description: "Embedded accounting integrations for corporate card providers. Standardize how you sync with bookkeeping software and ERPs.",
    link: "/sync-for-expenses/overview",
    linkText: "Read more",
  },
  {
    logo: "/logos/products/SyncforCommerce.svg",
    name: "Sync for Commerce",
    description: "Sync your merchants' data between commerce and accounting systems, and automate bookkeeping.",
    link: "/sfc/overview",
    linkText: "Begin syncing merchants' data →",
  },
]

const Products = ({mini, products}) => {
  const validProducts = !products
    ? allProducts
    : allProducts.filter(product => products.indexOf(product.name) !== -1)

  if(!!mini) {
    return (
      <ul className="card-container mini">
        {
          validProducts.map(product => {
            return (
              <li className="card mini">
                <div className="header">
                  <img
                    src={product.logo}
                    className="icon usecase"
                  />
                </div>
                
                <div className="content">
                  <h4>{product.name}</h4>
                  <p>
                    <a href={product.link}>Explore product →</a>
                  </p>    
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <ul className="card-container">
      {
        validProducts.map((product, i) => {
          return (
            <li ley={i} className="card">
              <div className="header">
                <img
                  src={product.logo}
                  className="icon usecase"
                />
              </div>
              <h3>{product.name}</h3>
              <p>
                {product.description}
              </p>
              <p>
                <a href={product.link}>{product.linkText}</a>
              </p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Products
import Image from 'next/image'
import styles from './ui/home.module.css'
import article from './lib/article.json'
import { PageData } from './lib/definitions'

const Page: React.FC = () => {
  const pageData: PageData = article
  return (
    <div>
      <header className={styles.header}>
        <Image
        src='/logos/sc-logo-color.svg'
        alt="Safety Culture Logo desktop version"
        width={200}
        height={30}
        className='hidden md:block'
        />
        </header>
        <main className={styles.main}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
      <hr />

      {pageData.content.map((item, index) => (
        <div key={index}>
          {item.value && <h2>{item.value}</h2>}
          {item.paragraph && <p>{item.paragraph}</p>}
          {item.requirements && <p>{item.requirements}</p>}
          {item.list && (
            <ul>
              {item.list.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>{listItem}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <hr />

      <h2>Related Content</h2>
      {pageData.relatedContent.map((relatedItem, index) => (
        <div key={index}>
          <h3>{relatedItem.value}</h3>
          <p>{relatedItem.description}</p>
        </div>
      ))}
       </main>
    </div>
   

  );
};

export default Page;
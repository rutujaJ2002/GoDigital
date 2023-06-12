import Product2 from "../assets/product-1.png";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Reach goals that matter <br className="sm:block hidden" />
      Keep projects on schedule
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit consequatur hic cumque, beatae veniam. Repellendus 
      doloremque repellat et cum nesciunt molestiae deserunt odio officia. Dolores repellat sed deserunt assumenda!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={Product2} alt="billing" className="w-[90%] h-[80%]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[50%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[60%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default CardDeal;

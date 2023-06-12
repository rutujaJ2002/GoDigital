import { apple,  google } from "../assets";
import Product1 from "../assets/product-2.png";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={Product1} alt="billing" className="w-[80%] h-[100%] relative z-[5]" />
      {/* gradient start */}
        <div className="absolute z-[0] w-[50%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[60%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      One product, unlimited solutions
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellat 
       nemo aliquid ab dicta placeat explicabo esse similique, 
       amet reprehenderit quo eligendi magnam nisi voluptatem laboriosam nam accusamus officiis? Perferendis.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;

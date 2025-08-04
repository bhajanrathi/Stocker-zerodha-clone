import Hero from "./Hero"
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection googlePlayStore={"https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en"} appStore={"https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"} tryDemo={"#"} learnMore={"#"} imageURL={"/media/images/kite.png"} imageAlt={"kite"} title={"Kite"} description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} />
            <RightSection learnMoreURL={"#"} imageURL={"/media/images/console.png"} imageAlt={"console"} title={"Console"} description={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} learnMore={"Learn More"} />
            <LeftSection googlePlayStore={"https://play.google.com/store/apps/details?id=com.zerodha.coin&hl=en"} appStore={"https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"} tryDemo={"#"} learnMore={"#"} imageURL={"/media/images/coin.png"} imageAlt={"coin"} title={"Coin"} description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} />
            <RightSection learnMoreURL={"#"} imageURL={"/media/images/kiteconnect.png"} imageAlt={"kite connect"} title={"Kite Connect API"} description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} learnMore={"Kite Connect"} />
            <LeftSection googlePlayStore={"https://play.google.com/store/apps/details?id=com.zerodha.varsity&hl=en"} appStore={"https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"} tryDemo={"#"} learnMore={"#"} imageURL={"/media/images/varsity.png"} imageAlt={"varsity"} title={"Varsity Mobile"} description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} />
            <Universe />
        </>
    );
}

export default ProductsPage;
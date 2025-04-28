import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import { products } from "../assets/Images";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import NotFound from "./NotFound";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "deocx31u2",
    apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
    apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
  },
});

const Container = styled.main`
  position: relative;
  width: 100%;
  background: var(--white);
  color: var(--secondary);
  padding: 0 2rem;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Wrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 801px) {
    flex-direction: row;
  }
`;

const Grid = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  aspect-ratio: 2/1.6;

  @media (max-width: 800px) {
    display: none;
  }
`;

const GridItem = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 3/2.8;

  @media (max-width: 1100px) {
    aspect-ratio: 1.5/2.5;
  }
`;

/* Skeleton Loader Animation */
const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 700px;
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  flex-grow: 1;
  opacity: ${(props) => (props["data-loaded"] ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
`;

const MayAlsoLike = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;

  @media (max-width: 900px) {
    margin-top: 2rem;
  }
`;

const Heading = styled.h2`
  position: relative;
  font-size: 1.5rem;
  font-variation-settings: "wght" 600;
  margin-bottom: 2.4rem;

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 150px;
    height: 5px;
    background: var(--secondary);
    transform: translateX(-50%);
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0;
  margin-top: 1rem;

  @media (max-width: 660px) {
    gap: 2rem;
  }
`;

const MobileSlider = styled(Swiper)`
  display: none;
  width: 100%;
  height: 35rem;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    height: 30rem;
  }

  @media (max-width: 375px) {
    height: 24rem;
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    bottom: 15px;
    background: rgba(240, 240, 240, 0.85);
    padding: 8px 15px;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
  }

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background: #a8a3a0;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: var(--secondary);
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--white);
    background: rgba(0, 0, 0, 0.3);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }

    &::after {
      font-size: 1.2rem;
    }
  }
`;

const SliderItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledProductDetails = styled(ProductDetails)`
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 800px) {
    width: 30%;
    margin-left: 2rem;
  }
`;

const SpecificProductTemplate = () => {
  const { id, category } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [imageLoaded, setImageLoaded] = useState(false);

  // Get related products only if product exists
  const relatedProducts = product
    ? products
        .filter((p) => {
          if (p.id === parseInt(id)) return false; // Exclude current product
          // Check if products share any categories
          return p.categories.some((cat) =>
            product.categories.some((productCat) => productCat.id === cat.id)
          );
        })
        .slice(0, 5)
    : [];

  if (!product) {
    return <NotFound />;
  }

  return (
    <Container>
      <Wrapper>
        <Grid>
          <Gallery
            options={{
              paddingFn: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
              bgOpacity: 0.9,
              closeOnVerticalDrag: true,
              closeOnClick: true,
              maxSpreadZoom: 1,
              getDoubleTapZoom: () => 1,
              wheelToZoom: false,
              imageClickAction: "close",
              tapAction: "close",
              preload: [1, 2],
              showHideAnimationType: "fade",
              imageScaleMethod: "fit",
              fitScreenHeight: true,
              fitScreenWidth: true,
            }}
          >
            {product.cloudinaryValues.map((image, index) => (
              <GridItem key={index}>
                <Item
                  original={cloudinary
                    .image(`${image}`)
                    .format("webp")
                    .quality("auto")
                    .resize(scale(900))
                    .toURL()}
                  thumbnail={cloudinary
                    .image(`${image}`)
                    .format("webp")
                    .quality("auto")
                    .resize(scale(900))
                    .toURL()}
                  width="1200"
                  height="1300"
                  msrc={cloudinary
                    .image(`${image}`)
                    .format("webp")
                    .quality("auto")
                    .resize(scale(900))
                    .toURL()}
                >
                  {({ ref, open }) => (
                    <>
                      {!imageLoaded && <Skeleton />}
                      <StyledImage
                        ref={ref}
                        src={cloudinary
                          .image(`${image}`)
                          .format("webp")
                          .quality("auto")
                          .resize(scale(900))
                          .toURL()}
                        alt={product.name}
                        data-loaded={imageLoaded}
                        onLoad={() => setImageLoaded(true)}
                        onClick={open}
                      />
                    </>
                  )}
                </Item>
              </GridItem>
            ))}
          </Gallery>
        </Grid>

        <MobileSlider
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
        >
          {product.cloudinaryValues.map((image, index) => (
            <SwiperSlide key={index}>
              <SliderItem>
                <Gallery
                  options={{
                    paddingFn: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
                  }}
                >
                  <Item
                    original={cloudinary
                      .image(`${image}`)
                      .format("webp")
                      .quality("auto")
                      .resize(scale(900))
                      .toURL()}
      
                    thumbnail={cloudinary
                      .image(`${image}`)
                      .format("webp")
                      .quality("auto")
                      .resize(scale(900))
                      .toURL()}
                    width="900"
                    height="1000"
                  >
                    {({ ref, open }) => (
                      <>
                        {!imageLoaded && <Skeleton />}
                        <StyledImage
                          ref={ref}
                          src={cloudinary
                            .image(`${image}`)
                            .format("webp")
                            .quality("auto")
                            .resize(scale(900))
                            .toURL()}
                          alt={product.name}
                          data-loaded={imageLoaded}
                          onLoad={() => setImageLoaded(true)}
                          onClick={open}
                        />
                      </>
                    )}
                  </Item>
                </Gallery>
              </SliderItem>
            </SwiperSlide>
          ))}
        </MobileSlider>

        <StyledProductDetails
          title={product.name}
          price={product.price}
          sizes={product.availableSizes}
          description={product.description}
          thumbnailImage={cloudinary
            .image(`${product.cloudinaryValues[0]}`)
            .format("webp")
            .quality("auto")
            .resize(scale(200))
            }
        />
      </Wrapper>

      <MayAlsoLike>
        <Heading>You may also like</Heading>
        <Products>
          {relatedProducts.map((product) => (
            <ProductCard
              style={{ flexGrow: "1" }}
              key={product.id}
              productTitle={product.name}
              price={product.price}
              cloudinaryValue={product.cloudinaryValues[0]}
              hoverImage={product.cloudinaryValues[1]}
              productLink={`/products/${category}/${product.id}`}
            />
          ))}
        </Products>
      </MayAlsoLike>
    </Container>
  );
};

export default SpecificProductTemplate;

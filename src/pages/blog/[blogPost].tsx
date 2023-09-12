import { useRouter } from "next/router";
import HeroSection from "@/components/HeroSection";
import React, { ReactNode } from "react";

import BaseLayout from "@/layout/BaseLayout";

const BlogPost = () => {
  const router = useRouter();
  const postNumber = router.query.blogPost;
  return (
    <div className="container_margin">
      <HeroSection heroTitle={` Blog Post ${postNumber}`} />
      <div className="blog-post">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta
        sed ligula nec ultricies. Nullam in varius augue. Nam placerat arcu sed
        metus maximus, eu dapibus metus sollicitudin. Aenean justo erat,
        eleifend ut sapien et, semper porta ante. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
        tristique, nulla id egestas maximus, magna nibh eleifend nunc, id
        sagittis dui neque quis quam. Suspendisse tristique, nulla id egestas
        maximus, magna nibh eleifend nunc, id sagittis dui neque quis quam.
        Nulla efficitur sem ut rhoncus ullamcorper. Pellentesque vitae arcu a
        tortor blandit ultricies vel sed tellus. Sed quam dui, ornare a purus
        at, euismod dictum lectus. Donec feugiat egestas est sit amet laoreet.
        In iaculis suscipit ex, ut commodo erat. Phasellus dictum, elit nec
        semper cursus, augue diam accumsan nisl, vel tristique diam elit eu
        lorem. Nulla commodo enim lacus, et commodo velit vulputate sit amet.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta
        sed ligula nec ultricies. Nullam in varius augue. Nam placerat arcu sed
        metus maximus, eu dapibus metus sollicitudin. Aenean justo erat,
        eleifend ut sapien et, semper porta ante. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
        tristique, nulla id egestas maximus, magna nibh eleifend nunc, id
        sagittis dui neque quis quam. Suspendisse tristique, nulla id egestas
        maximus, magna nibh eleifend nunc, id sagittis dui neque quis quam.
        Nulla efficitur sem ut rhoncus ullamcorper. Pellentesque vitae arcu a
        tortor blandit ultricies vel sed tellus. Sed quam dui, ornare a purus
        at, euismod dictum lectus. Donec feugiat egestas est sit amet laoreet.
        In iaculis suscipit ex, ut commodo erat. Phasellus dictum, elit nec
        semper cursus, augue diam accumsan nisl, vel tristique diam elit eu
        lorem. Nulla commodo enim lacus, et commodo velit vulputate sit amet.
        Marketing Looks Different for Home Services Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean porta sed ligula nec ultricies.
        Nullam in varius augue. Nam placerat arcu sed metus maximus, eu dapibus
        metus sollicitudin. Aenean justo erat, eleifend ut sapien et, semper
        porta ante. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Suspendisse tristique, nulla id egestas
        maximus, magna nibh eleifend nunc, id sagittis dui neque quis quam.
        Suspendisse tristique, nulla id egestas maximus, magna nibh eleifend
        nunc, id sagittis dui neque quis quam. Nulla efficitur sem ut rhoncus
        ullamcorper. Pellentesque vitae arcu a tortor blandit ultricies vel sed
        tellus. Sed quam dui, ornare a purus at, euismod dictum lectus. Donec
        feugiat egestas est sit amet laoreet. In iaculis suscipit ex, ut commodo
        erat. Phasellus dictum, elit nec semper cursus, augue diam accumsan
        nisl, vel tristique diam elit eu lorem. Nulla commodo enim lacus, et
        commodo velit vulputate sit amet. Marketing Looks Different for Home
        Services Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        porta sed ligula nec ultricies. Nullam in varius augue. Nam placerat
        arcu sed metus maximus, eu dapibus metus sollicitudin. Aenean justo
        erat, eleifend ut sapien et, semper porta ante. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Suspendisse tristique, nulla id egestas maximus, magna nibh eleifend
        nunc, id sagittis dui neque quis quam. Suspendisse tristique, nulla id
        egestas maximus, magna nibh eleifend nunc, id sagittis dui neque quis
        quam. Nulla efficitur sem ut rhoncus ullamcorper. Pellentesque vitae
        arcu a tortor blandit ultricies vel sed tellus. Sed quam dui, ornare a
        purus at, euismod dictum lectus. Donec feugiat egestas est sit amet
        laoreet. In iaculis suscipit ex, ut commodo erat. Phasellus dictum, elit
        nec semper cursus, augue diam accumsan nisl, vel tristique diam elit eu
        lorem. Nulla commodo enim lacus, et commodo velit vulputate sit amet.
        Marketing Looks Different for Home Services Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean porta sed ligula nec ultricies.
        Nullam in varius augue. Nam placerat arcu sed metus maximus, eu dapibus
        metus sollicitudin. Aenean justo erat, eleifend ut sapien et, semper
        porta ante. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Suspendisse tristique, nulla id egestas
        maximus, magna nibh eleifend nunc, id sagittis dui neque quis quam.
        Suspendisse tristique, nulla id egestas maximus, magna nibh eleifend
        nunc, id sagittis dui neque quis quam. Nulla efficitur sem ut rhoncus
        ullamcorper. Pellentesque vitae arcu a tortor blandit ultricies vel sed
        tellus. Sed quam dui, ornare a purus at, euismod dictum lectus. Donec
        feugiat egestas est sit amet laoreet. In iaculis suscipit ex, ut commodo
        erat. Phasellus dictum, elit nec semper cursus, augue diam accumsan
        nisl, vel tristique diam elit eu lorem. Nulla commodo enim lacus, et
        commodo velit vulputate sit amet. Donec feugiat egestas est sit amet
        laoreet. In iaculis suscipit ex, ut commodo erat. Phasellus dictum, elit
        nec semper cursus, augue diam accumsan nisl, vel tristique diam elit eu
        lorem. Nulla commodo enim lacus, et commodo velit vulputate sit amet.
        Marketing Looks Different for Home Services Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean porta sed ligula nec ultricies.
        Nullam in varius augue. Nam placerat arcu sed metus maximus, eu dapibus
        metus sollicitudin. Aenean justo erat, eleifend ut sapien et, semper
        porta ante. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Suspendisse tristique, nulla id egestas
        maximus, magna nibh eleifend nunc, id sagittis dui neque quis quam.
        Suspendisse tristique, nulla id egestas maximus, magna nibh eleifend
        nunc, id sagittis dui neque quis quam. Nulla efficitur sem ut rhoncus
        ullamcorper. Pellentesque vitae arcu a tortor blandit ultricies vel sed
        tellus. Sed quam dui, ornare a purus at, euismod dictum lectus. Donec
        feugiat egestas est sit amet laoreet. In iaculis suscipit ex, ut commodo
        erat. Phasellus dictum, elit nec semper cursus, augue diam accumsan
        nisl, vel tristique diam elit eu lorem. Nulla commodo enim lacus, et
        commodo velit vulputate sit amet. Marketing Looks Different for Home
        Services Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        porta sed ligula nec ultricies. Nullam in varius augue. Nam placerat
        arcu sed metus maximus, eu dapibus metus sollicitudin. Aenean justo
        erat, eleifend ut sapien et, semper porta ante. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Suspendisse tristique, nulla id egestas maximus, magna nibh eleifend
        nunc, id sagittis dui neque quis quam. Suspendisse tristique, nulla id
        egestas maximus, magna nibh eleifend nunc, id sagittis dui neque quis
        quam. Nulla efficitur sem ut rhoncus ullamcorper. Pellentesque vitae
        arcu a tortor blandit ultricies vel sed tellus. Sed quam dui, ornare a
        purus at, euismod dictum lectus. Donec feugiat egestas est sit amet
        laoreet. In iaculis suscipit ex, ut commodo erat. Phasellus dictum, elit
        nec semper cursus, augue diam accumsan nisl, vel tristique diam elit eu
        lorem. Nulla commodo enim lacus, et commodo velit vulputate sit amet.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta
        sed ligula nec ultricies. Nullam in varius augue. Nam placerat arcu sed
        metus maximus, eu dapibus metus sollicitudin. Aenean justo erat,
        eleifend ut sapien et, semper porta ante. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
        tristique, nulla id egestas maximus, magna nibh eleifend nunc, id
        sagittis dui neque quis quam. Suspendisse tristique, nulla id egestas
        maximus, magna nibh eleifend nunc, id sagittis dui neque quis quam.
        Nulla efficitur sem ut rhoncus ullamcorper. Pellentesque vitae arcu a
        tortor blandit ultricies vel sed tellus. Sed quam dui, ornare a purus
        at, euismod dictum lectus. Donec feugiat egestas est sit amet laoreet.
        In iaculis suscipit ex, ut commodo erat. Phasellus dictum, elit nec
        semper cursus, augue diam accumsan nisl, vel tristique diam elit eu
        lorem. Nulla commodo enim lacus, et commodo velit vulputate sit amet.
        Marketing Looks Different for Home Services Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean porta sed ligula nec ultricies.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aene
      </div>
    </div>
  );
};
BlogPost.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};
export default BlogPost;

import React from "react";
import "./singlepost.css";

export default function SinglePost() {
    return (
      <div className='singlePost'>
        <div className='singlePostWrapper'>
          <img
            src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/140/171/original/john-bell-haGopMEwC6M-unsplash.jpg?1724123504'
            alt='Wild Coyote'
            className='singlePostImage'
          />
          <h1 className='singlePostTitle'>
            The Coyote
            <div className='singlePostEdit'>
              <i className='singlePostIcon fa-regular fa-pen-to-square'></i>
              <i className='singlePostIcon fa-solid fa-trash'></i>
            </div>
          </h1>
          <div className='singlePostInfo'>
            <span className='singlePostAuthor'>
              Author: <b>Angelica Victoria</b>
            </span>
            <span className='singlePostDate'>1 hour ago</span>
          </div>
          <p className="singlePostDescription">
            Coyotes come from an older lineage of Canis than the gray wolf, as
            shown by their relatively small size and their comparatively narrow
            skull and jaws, which lack the grasping power necessary to hold the
            large prey wolves specialize in. They are not as specialized a
            carnivore as the wolf is, as shown by the larger chewing surfaces on
            the molars, reflecting the species’ relative dependence on vegetable
            matter. In these respects, the coyote resembles the fox-like
            progenitors of the genus more so than the wolf (Nowak, 1978). The
            evolution of coyotes can be traced back to an extinct type of small
            omnivorous fox-like canid endemic to North America 10.3—3.6 million
            years ago (Kurten, 1980). Modern coyotes arose during the Middle
            Pleistocene, and showed much more variation than they do today
            (Nowak, 1978). They were larger and more robust, likely in response
            to larger competitors and prey (Meachen and Samuels, 2012). Their
            reduction in size occurred after an extinction event, when their
            larger prey died (Meachen and Samuels, 2012). Furthermore,
            Pleistocene coyotes were unable to exploit the big game hunting
            niche left vacant after the extinction of the dire wolf, as it was
            rapidly filled by gray wolves, which likely actively killed off the
            large coyotes (Meachen et al, 2014). Instead, they evolved to be the
            highly adaptable species they are today, hunting mostly rabbits and
            rodents but able to hunt larger prey when available.
          </p>
        </div>
      </div>
    );
}
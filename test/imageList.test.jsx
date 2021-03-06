import React from 'react';
import ImageList from '../client/components/imageView/imageList';
import ImageListEntry from '../client/components/imageView/imageListEntry';
import data from '../client/dummyData';

describe('<ImageList />', () => {
  it('should dynamically render <ImageListEntry /> based on the array passed in', () => {
    const imageArray = data.image_url;
    const wrapper = shallow(<ImageList images={imageArray} />);
    expect(wrapper.find(ImageListEntry).length).toEqual(imageArray.length);
  });
});

class MusicItemModel {
  constructor(
    id,
    isAvailable,
    company,
    aboutItem,
    displayName,
    colour,
    price,
    type,
    description,
    displayImageList
  ) {
    this.id = id;
    this.displayName = displayName;
    this.type = type;
    this.price = price;
    this.colour = colour;
    this.description = description;
    this.company = company;
    this.aboutItem = aboutItem;
    this.isAvailable = isAvailable;
    this.displayImageList = displayImageList;
  }

  static fromMap(data) {
    return new MusicItemModel(
      data.id,
      data.isAvailable,
      data.company,
      data.aboutItem,
      data.displayName,
      data.colour,
      data.price,
      data.type,
      data.description,
      data.displayImageList ? data.displayImageList.slice() : []
    );
  }
}

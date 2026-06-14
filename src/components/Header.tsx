import info from "./../assets/json/header_info.json";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <img src={info.iconUrl} className="profile-icon" />
        <div className="col-wrapper" id="header-wrapper">
          <div className="heading">
            <span className="heading bold" id="heading-text">
              {info.heading}
            </span>
          </div>
          <div className="sub-heading-container">
            {info.subHeading.map((item) => {
              return (
                <div className="sub-heading-item">
                  {item.iconName && (
                    <span className="material-symbols-outlined header-info-icon">
                      {item.iconName}
                    </span>
                  )}
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

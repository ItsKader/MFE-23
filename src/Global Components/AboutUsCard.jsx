import '../Styles/Global Components/AboutUsCard.scss';

import CarImage from '../Assets/landing-car.png';

export default function AboutUsCard({ text }) {

  return (
    <div class="auc-root">
      <div className="auc-card">
          <h3 className="auc-card--title">{text[0].title}</h3>
          <p className="auc-card--text">{text[0].body}</p>
        </div>

        <div className="auc-card">
          <h3 className="auc-card--title">{text[1].title}</h3>
          <p className="auc-card--text">{text[1].body}</p>
        </div>

        {/* these exist for white space in the original website.
            the text may look empty, but it actually contains a special
            character that is invisible but causes the browser to allocate
            space for the boxes as if they had actual characters in them. */}
        <h3 className="auc-card--title auc-whitespace"> ‍</h3>
        <p className="auc-card--text auc-whitespace"> ‍</p>

        <img src={CarImage} className="auc-card--image"></img>

        <div className="auc-card">
          <h3 className="auc-card--title">{text[2].title}</h3>
          <p className="auc-card--text">{text[2].body}</p>
        </div>

        <div className="auc-card">
          <h3 className="auc-card--title">{text[3].title}</h3>
          <p className="auc-card--text">{text[3].body}</p>
        </div>
    </div>
  );

}
import { classNames } from "../../helpers/classNames";
import "./frame.style.css";

type FrameContentType = "article" | "photo" | "video" | "custom";

type FramePosition = "left" | "right";

interface IFrame {
  fadePreView?: boolean;
  frameContentType: FrameContentType;
  position?: FramePosition;
  source?: string;

  /* content type article*/
  title?: string;
  titleCentered?: boolean;
  titleBold?: boolean;
  customContent?: React.ReactNode;
  description?: string;
}

const Frame: React.FC<IFrame> = (props) => {
  const {
    frameContentType,
    description,
    fadePreView,
    position,
    source,
    title,
    titleBold,
    titleCentered,
    customContent,
  } = props;

  return (
    <div
      className={classNames("frame", {
        "frame-bg": fadePreView,
      })}
    >
      {/* Articles */}

      {frameContentType === "article" && (
        <div
          className={classNames("frame__content frame__article", {
            "text-left": position === "left",
            "text-right": position === "right",
          })}
        >
          <h3
            className={classNames("", {
              centered: titleCentered,
              bold: titleBold,
            })}
          >
            {title}
          </h3>
          <p>{description}</p>
        </div>
      )}

      {/* Photos */}

      {frameContentType === "photo" && (
        <div className="frame__content">
          <div
            className={classNames("frame-media", {
              "frame-media-left": position === "left",
              "frame-media-right": position === "right",
            })}
            style={{ backgroundImage: `url(${source})` }}
          />
        </div>
      )}

      {/* Video */}

      {frameContentType === "video" && (
        <div className="frame__content">
          <video
            className={classNames("frame-media", {
              "frame-media-left": position === "left",
              "frame-media-right": position === "right",
            })}
            autoPlay
            muted
            loop
          >
            <source src={source} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Custom */}

      {frameContentType === "custom" && (
        <div className="frame__content ">{customContent}</div>
      )}
    </div>
  );
};
export default Frame;

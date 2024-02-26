import "./index.css"

interface Props {
    x: string | number;
    y: string | number;
    width: string | number;
    height: string;
    tips?: string;
    prevTxt?: string;
    nextTxt?: string;
    prev?: () => void;
    next?: () => void
}
export default function UserGuide(props: Props) {
    const { x, y, width, height, tips, prevTxt, nextTxt, prev, next } = props
    return <div className="userGuideContent">
        <div
            className="mask"
            style={{ height: y, width: '100%', left: 0, top: 0 }}
        ></div>
        <div className="mask" style={{ height, width: x, left: 0, top: y }}></div>
        <div
            className="mask"
            style={{
                height,
                width: `calc(100% - ${x} - ${width})`,
                left: `calc(${x} + ${width})`,
                top: y,
            }}
        ></div >
        <div
            className="mask"
            style={{
                height: `calc(100% - ${height} - ${y})`,
                width: '100%',
                left: 0,
                top: `calc(${y} + ${height})`,
            }}
        ></div>
        <div
            className="guideTxt"
            style={{
                top: `calc(${y} + ${height})`,
            }}
        >
            {tips}
        </div>
        <div className="toolsBox">
            <div
                onClick={prev}
                style={{
                    visibility: prevTxt === '' ? 'hidden' : undefined,
                }}
            >
                {prevTxt}
            </div>
            <div
                onClick={next}
                style={{
                    visibility: nextTxt === '' ? 'hidden' : undefined,
                }}
            >
                {nextTxt}
            </div >
        </div >
    </div >
}

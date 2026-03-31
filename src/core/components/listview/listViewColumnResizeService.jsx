class ListViewColumnResizeService {
    isResizing = { value: false };
    columns = [];
    setColumns = null;
    onColumnResize;

    constructor(cols, setCols, onColumnResize) {
        this.columns = cols;
        this.setColumns = setCols;
        this.onColumnResize = onColumnResize
    }

    init = () => {

        //Header root container
        let table = document.getElementsByClassName("rdt_TableHeadRow");
        //List of column header root containers 
        const resizers = table && table.length > 0 ? Array.from(table[0].querySelectorAll(".rdt_TableCol")) : null;
        if (resizers && resizers.length > 1) {

            let handleArr = [];
            resizers.splice(0, 1);
            // Adding right sight transparent border so that user can place mouse and drag. Also adding listeners
            resizers.forEach((resizer, index) => {
                //Creating right sight border div
                let handle = this.createRightSightElement(resizer);

                let mousedownEvt = this.onMouseDown(resizer, index);
                handle.addEventListener("mousedown", mousedownEvt);

                //this array required to remove listener after use
                handleArr.push({handle, mousedownEvt});              
            });


            // Cleanup
            return () => {
                handleArr.forEach(obj => {
                    obj.handle.removeEventListener("mousedown", obj.mousedownEvt);
                });
            };
        }
    }

    createRightSightElement = (resizer) => {
        // Create the right-side handle
        const handle = document.createElement("div");
        handle.className = "resize-handle";
        Object.assign(handle.style, {
            position: "absolute",
            top: 0,
            right: 0,
            width: "5px",
            height: "100%",
            cursor: "ew-resize",
            background: "transparent",
            // background: "grey"
        });

        // Ensure box is positioned
        resizer.style.position = "relative";
        resizer.appendChild(handle);
        return handle;
    }

    // Event handlers
    onMouseDown = (resizer, index) => (e) => {
        this.isResizing.value = true;
        document.body.style.userSelect = "none";

        let mousemoveEvt = this.onMouseMove(resizer, index);
        document.addEventListener("mousemove", mousemoveEvt);
        document.addEventListener("mouseup", this.onMouseUp(mousemoveEvt));
    };

    onMouseMove = (resizer, index) => (e) => {
        if (!this.isResizing.value) return;
        let left = resizer.getBoundingClientRect().left;
        let newWidth = e.pageX - left;
        
        if (newWidth > 20) {
            let arr = [...this.columns];
            //arr = arr.filter(f => !f.isHidden); // is Hidden required to remove otherwise it will update width on different column
            
            let tmpIndex = 0;
            arr.forEach((item, rawColIndex) => {
                if(!item.isHidden) {
                    if(tmpIndex === index) {
                        arr[rawColIndex].width = `${newWidth}px`;
                        this.columns = arr;
                        this.setColumns(arr);
                        this.onColumnResize(arr[rawColIndex]);
                    }
                    tmpIndex++;
                }
            });
            
        }
    };

    onMouseUp = (mousemoveEvt) => () => {
        this.isResizing.value = false;
        document.body.style.userSelect = "auto";

        document.removeEventListener("mousemove", mousemoveEvt);
    };
}


export default {
    init: (columns, setColumns, onColumnResize) => new ListViewColumnResizeService(columns, setColumns, onColumnResize).init()
}
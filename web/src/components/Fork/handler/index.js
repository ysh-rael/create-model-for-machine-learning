import { Draw } from "../../../utils/Draw";

export function DrawFork({ ctx, Designs, setDesigns }) {

    if (Designs.length)
        Designs.forEach(esse => {
            const { height, width, x, y, color, form, ray, idElem1, idElem2 } = esse;
            switch (form) {
                case 'circle':
                    Draw.circle({ ctx, x, y, ray, color })
                    break;

                case 'line':
                    if (!idElem1 || !idElem2) return;
                    Draw.line({ ctx, color, Designs, idElem1, idElem2 })
                    break;
                default:
                    Draw.rect({ ctx, x, y, color, width, height })
                    break;
            }
        })

}

export function handleMouseDown(event) {
    
}
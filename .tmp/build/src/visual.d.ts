import "./../style/visual.less";
import "./../node_modules/leaflet/dist/leaflet.css";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
export declare class Visual implements IVisual {
    private target;
    private map;
    private Tooltip;
    private svgroot;
    private graph;
    private svg;
    private directEditElement;
    private formattingSettings;
    private formattingSettingsService;
    private selectionManager;
    private formatMode;
    private visualDirectEditSubSelection;
    private geojsonFeature;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    private updateDirectEditElementFormat;
    /**
     * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
     * This method is called once every time we open properties pane or when the user edit any format property.
     */
    getFormattingModel(): powerbi.visuals.FormattingModel;
    private getSubSelectionStyles;
    private getColorSelectorStyles;
    private getEnableAxisStyles;
    private getDirectEditStyles;
    private creatDirectEditElement;
}

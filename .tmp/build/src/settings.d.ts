import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
import ToggleSwitch = formattingSettings.ToggleSwitch;
import Slice = formattingSettings.Slice;
/**
 * Data Point Formatting Card
 */
declare class DataPointCardSettings extends FormattingSettingsCard {
    defaultColor: formattingSettings.ColorPicker;
    showAllDataPoints: formattingSettings.ToggleSwitch;
    fill: formattingSettings.ColorPicker;
    fillRule: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    tileLayerUrl: formattingSettings.TextInput;
    tileLayerAttribution: formattingSettings.TextInput;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class DirectEditSettings extends FormattingSettingsCard {
    displayName: string;
    name: string;
    private minFontSize;
    private defaultFontSize;
    show: formattingSettings.ToggleSwitch;
    topLevelSlice: ToggleSwitch;
    textProperty: formattingSettings.TextInput;
    position: formattingSettings.AutoDropdown;
    font: formattingSettings.FontControl;
    fontColor: formattingSettings.ColorPicker;
    background: formattingSettings.ColorPicker;
    tileLayer: formattingSettings.TextArea;
    zoomLevel: formattingSettings.NumUpDown;
    slices: Slice[];
}
/**
* visual settings model class
*
*/
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    dataPointCard: DataPointCardSettings;
    directEditSettings: DirectEditSettings;
    cards: (DataPointCardSettings | DirectEditSettings)[];
}
export {};

export const confirmValue = (firstControlName, secondControlName) => (formGroup) => {
    const firstControl = formGroup.get(firstControlName);
    const secondControl = formGroup.get(secondControlName);
    if ((firstControl === null || firstControl === void 0 ? void 0 : firstControl.value) !== (secondControl === null || secondControl === void 0 ? void 0 : secondControl.value)) {
        return {
            confirmValue: {
                firstControlName,
                firstControlValue: firstControl === null || firstControl === void 0 ? void 0 : firstControl.value,
                secondControlName,
                secondControlValue: secondControl === null || secondControl === void 0 ? void 0 : secondControl.value,
            }
        };
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybVZhbHVlVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvY29uZmlybVZhbHVlVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLGdCQUF3QixFQUFFLGlCQUF5QixFQUFFLEVBQUUsQ0FDbEYsQ0FBQyxTQUFvQixFQUFFLEVBQUU7SUFFdkIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUV2RCxJQUFJLENBQUEsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLEtBQUssT0FBSyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsS0FBSyxDQUFBLEVBQUU7UUFDaEQsT0FBTztZQUNMLFlBQVksRUFBRTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLGlCQUFpQixFQUFFLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxLQUFLO2dCQUN0QyxpQkFBaUI7Z0JBQ2pCLGtCQUFrQixFQUFFLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxLQUFLO2FBQ3pDO1NBQ0YsQ0FBQztLQUNIO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBjb25maXJtVmFsdWUgPSAoZmlyc3RDb250cm9sTmFtZTogc3RyaW5nLCBzZWNvbmRDb250cm9sTmFtZTogc3RyaW5nKSA9PlxuICAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+IHtcblxuICAgIGNvbnN0IGZpcnN0Q29udHJvbCA9IGZvcm1Hcm91cC5nZXQoZmlyc3RDb250cm9sTmFtZSk7XG4gICAgY29uc3Qgc2Vjb25kQ29udHJvbCA9IGZvcm1Hcm91cC5nZXQoc2Vjb25kQ29udHJvbE5hbWUpO1xuXG4gICAgaWYgKGZpcnN0Q29udHJvbD8udmFsdWUgIT09IHNlY29uZENvbnRyb2w/LnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb25maXJtVmFsdWU6IHtcbiAgICAgICAgICBmaXJzdENvbnRyb2xOYW1lLFxuICAgICAgICAgIGZpcnN0Q29udHJvbFZhbHVlOiBmaXJzdENvbnRyb2w/LnZhbHVlLFxuICAgICAgICAgIHNlY29uZENvbnRyb2xOYW1lLFxuICAgICAgICAgIHNlY29uZENvbnRyb2xWYWx1ZTogc2Vjb25kQ29udHJvbD8udmFsdWUsXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07Il19
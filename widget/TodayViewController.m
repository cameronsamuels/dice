//  Created by CameronSamuels on 7/25/17.
//  Copyright © 2017 Cameron Samuels. All rights reserved.
#import "TodayViewController.h"
#import <NotificationCenter/NotificationCenter.h>
@interface TodayViewController () <NCWidgetProviding>
@end
@implementation TodayViewController
- (void)viewDidLoad {
    [page loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"]]]];
    page.scrollView.bounces = NO;
    [super viewDidLoad];
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}
- (void)widgetPerformUpdateWithCompletionHandler:(void (^)(NCUpdateResult))completionHandler {
    completionHandler(NCUpdateResultNoData);
}
@end

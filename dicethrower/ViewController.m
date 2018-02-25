//  Created by CameronSamuels on 6/26/17.
//  Copyright © 2017 Cameron Samuels. All rights reserved.
#import "ViewController.h"
@interface ViewController ()
@end
@implementation ViewController
- (void)viewDidLoad {
    [page loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"]]]];
    page.scrollView.bounces = NO;
    [super viewDidLoad];
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}
@end
